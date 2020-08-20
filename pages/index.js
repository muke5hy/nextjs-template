import Head from "next/head";
import { Alert } from "reactstrap";
import Layout from "../components/layout";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
  Jumbotron,
} from "reactstrap";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>ReactJS with reactstrap</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <Alert color="primary">
          This is a primary alert with{" "}
          <a href="#" className="alert-link">
            an example link
          </a>
          . Give it a click if you like.
        </Alert>
        <section>
          <Container>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col sm="6">
                <Card className="my-3">
                  <CardBody>
                    <CardTitle tag="h5">Documentation</CardTitle>
                    <CardText>
                      Find in-depth information about Next.js features and API.
                    </CardText>
                    <Button color="primary" href="https://nextjs.org/docs">
                      More &rarr;
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="my-3">
                  <CardBody>
                    <CardTitle tag="h5">Learn</CardTitle>
                    <CardText>
                      Learn about Next.js in an interactive course with quizzes!
                    </CardText>
                    <Button color="primary" href="https://nextjs.org/learn">
                      More &rarr;
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <Card className="my-3">
                  <CardBody>
                    <CardTitle tag="h5">Examples</CardTitle>
                    <CardText>
                      Discover and deploy boilerplate example Next.js projects.
                    </CardText>
                    <Button
                      color="primary"
                      href="https://github.com/vercel/next.js/tree/master/examples"
                    >
                      More &rarr;
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="my-3">
                  <CardBody>
                    <CardTitle tag="h5">Deploy</CardTitle>
                    <CardText>
                      Instantly deploy your Next.js site to a public URL with
                      Vercel.
                    </CardText>
                    <Button
                      color="primary"
                      href="https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                    >
                      More &rarr;
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}
