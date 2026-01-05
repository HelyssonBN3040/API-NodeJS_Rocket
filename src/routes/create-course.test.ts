import { test, expect } from "vitest"
import resquest from "supertest"
import { server } from '../app.ts'

test('cria um curso com sucesso', async () => {
    await server.ready()

    const response = await resquest(server.server)
        .post("/courses")
        .set("Content-Type", "application/json")
        .send({ title: "Curso de V" })

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
        courseId: expect.any(String),
    })
})