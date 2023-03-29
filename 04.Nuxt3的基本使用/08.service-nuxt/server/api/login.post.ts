export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const method = getMethod(event)
    const body = await readBody(event)
    const bodyRaw = await readRawBody(event)
    console.log(query, method, body, bodyRaw);
    
    return {
        code: 200,
        data: "liujun",
        age: 19,
        token: "aabbcc"
    }
})