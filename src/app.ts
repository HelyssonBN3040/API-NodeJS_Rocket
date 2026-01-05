// const fastify = require("fastify");
// const  crypto = require("crypto");

import fastify from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod"
import { createCourseRoute } from "./routes/create-courses.ts";
import { getCoursesRoute } from "./routes/get-courses.ts";
import { getCoursesRouteId } from "./routes/get-courses-by-id.ts";
import ScalarAPIReference from "@scalar/fastify-api-reference"
import { loginRoute } from "./routes/login.ts";



const server = fastify(
    {
        logger: {
            transport: {
                target: 'pino-pretty',
                options: {
                    translateTime: 'HH:MM:ss Z',
                    ignore: 'pid,hostname',
                },
            },
        }
    }).withTypeProvider<ZodTypeProvider>()



if (process.env.NODE_ENV === 'development') {
    server.register(fastifySwagger, {
        openapi: {
            info: {
                title: "API NodeJS",
                version: '1.0.0',

            }
        },
        transform: jsonSchemaTransform,
    })

    server.register(fastifySwaggerUi, {
        routePrefix: "/docs-swagger",
    })

    server.register(ScalarAPIReference, {
        routePrefix: '/docs-scalar',
        configuration: {
            theme: "kepler"
        }
    })
}

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(createCourseRoute)
server.register(getCoursesRoute)
server.register(getCoursesRouteId)
server.register(loginRoute)


export {server}