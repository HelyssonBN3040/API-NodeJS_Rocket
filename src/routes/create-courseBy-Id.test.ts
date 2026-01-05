import { test, expect } from "vitest"
import request from 'supertest'
import { server } from '../app.ts'

test('Buscar curso pelo id', async () => {
    await server.ready()

    const response = await request(server.server)
        .get("/courses/")


    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
        course: {
            id: expect.any(String),
            title: expect.any(String),
            description: null
        },
    })
})