import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import {z} from "zod"

export const createCourseRoute:FastifyPluginAsyncZod = async (server )=>  {
    server.post("/courses", {
    schema: {
        tags:["Cursos"],
        summary: "Criação de curso",
        description: "Essa cria um titulo e salva no banco de dados",
        body: z.object({
            title: z.string().min(5, "titulo precisa ter 5 caracteres")
        }),
        response:{
            201: z.object({ courseId: z.uuid()}).describe("Curso criado com sucesso!")
        }
    }
}, async (request, reply) => {

    const courseTitle = request.body.title


    const result = await db
        .insert(courses)
        .values({
            title: courseTitle,
        })
        .returning()

    return reply.status(201).send({ courseId: result[0].id })
})


}