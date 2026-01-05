import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import { z } from "zod"
import { eq } from "drizzle-orm"

export const getCoursesRouteId: FastifyPluginAsyncZod = async (server) => {
    server.get("/courses/:id", {
        schema: {
            tags: ["Cursos"],
            summary: "Listar curso por ID",
            description: "Essa rota lista um curso atraves do ID",
            params: z.object({
                id: z.uuid(),
            }),
            response: {
                200: z.object({
                    course: z.object({
                        id: z.uuid(),
                        title: z.string(),
                        description: z.string().nullable()
                    })
                }),
                404: z.null().describe("curso nao encontrado"),
            },
        },
    }, async (request, reply) => {

        const courseId = request.params.id

        const result = await db
            .select()
            .from(courses)
            .where(eq(courses.id, courseId))


        if (result.length > 0) {
            return { course: result[0] }
        }

        return reply.status(404).send() // .send() não é obrigatorio 
    })

}





