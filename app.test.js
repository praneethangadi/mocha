let chai = require("chai");
let chaiHttp = require("chai-http");
let App = require("./app").App;

chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    describe("GET /people", () => {
        it("testing get", (done) => {
            chai.request(App)
                .get("/people")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });
    });
});

describe("POST /people", () => {
    it("testing post", (done) => {
        chai.request(App)                
            .post("/people")
            .send({id : "3",name: "pegasus"})
            .end((err, response) => {
                response.should.have.status(200);
                
                response.body.should.have.property('success').eq(true);
                response.body.should.have.property('name').eq("pegasus");
            done();
            });
    });
})

describe("PUT /people:id", () => {
    it("testing put", (done) => {
        const taskId = 3;
        chai.request(App)                
            .put("/people/" + taskId)
            .send({name:"kenmiles"})
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.have.property('name').eq("kenmiles");
                response.body.should.have.property('success').eq(true);
            done();
            });
    });
});
describe("DELETE /people:id", () => {
    it("testing delete", (done) => {
        const taskId = 1;
        chai.request(App)                
            .delete("/people/" + taskId)
            .send({id:1})
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.have.property('success').eq(true);
            done();
            });
    });
});