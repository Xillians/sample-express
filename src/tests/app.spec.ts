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
                    expect(res.status).to.equal(500, "/crash did not have status 500!");
                    expect(res.body.message).to.contain(errorMessage, "/crash had wrong message");
                    done();
                });
        });
        it("/complete", done => {
            chai.request(app)
                .get('/complete')
                .end( (err, res) => {
                    const message = "Successful get";
                    expect(res.status).to.equal(200, "/crash did not have status 200!");
                    expect(res.body.message).to.contain(message, "/complete had wrong message");
                    done();
                });
        });
    });
});