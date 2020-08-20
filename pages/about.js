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
      </Layout>
    </>
  );
}
