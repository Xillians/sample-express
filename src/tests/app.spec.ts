import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app, { stop } from '../app';

// chai is configured
chai.use(chaiHttp);
chai.should();

describe("testing application endpoints", () =>{
    after( async () => {
        stop();
    });
    describe("GET endpoints", () => {
        it("/crash", done => {
            chai.request(app)
                .get('/crash')
                .end( (err, res) => {
                    const errorMessage = "Expected error occured: endpoint is /crash";
                    const status = 500;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(errorMessage, "/crash had wrong message");
                    done();
                });
        });
        it("/complete", done => {
            chai.request(app)
                .get('/complete')
                .end( (err, res) => {
                    const message = "Successful get";
                    const status = 200;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
        it("/badRequest", done => {
            chai.request(app)
                .get('/badRequest')
                .end( (err, res) => {
                    const message = "Unsuccessful: request bad";
                    const status = 400;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
        it("/notFound", done => {
            chai.request(app)
                .get('/notFound')
                .end( (err, res) => {
                    const message = "Unsuccessful: not found";
                    const status = 404;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
        it("/forbidden", done => {
            chai.request(app)
                .get('/forbidden')
                .end( (err, res) => {
                    const message = "Unsuccessful: rejected";
                    const status = 403;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
        it("/teapot", done => {
            chai.request(app)
                .get('/teapot')
                .end( (err, res) => {
                    const message = "Bold of you to assume I make coffee! I'm a teapot!";
                    const status = 418;
                    const endpoint = "badRequest"
                    expect(res.status).to.equal(status, `/${endpoint} did not have ${status}`);
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
    });
});