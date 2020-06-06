import * as React from 'react';

import { Page } from '../../components/page';
import { Button } from '../../components/button';
import { Row, Column } from '../../components/grid';

import './index.scss';
import { navigate } from 'gatsby';
import { Input } from '../../components/input';
import { Textarea } from '../../components/textarea';

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Contact = () => {
  const [state, setState] = React.useState({});

  const onChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Page title="Contact">
      <Row className="pzContact">
        <Column spanLg={6} spanXl={6}>
          <Row className="pzContact__content">
            <p>
              Puzzle is a collective of young and enthusiastic architects established in 2018. As a team, we have worked
              on a wide spectrum of projects including exhibitions, interior design, architectural projects, conceptual
              projects, research, etc. and successfully participated in many competitions. Throughout our work, we try
              to have a research-oriented approach thus creating more sustainable, outspoken, and creative solutions for
              all architectural challenges.
            </p>
          </Row>
          <Row className="pzContact__contact-form-title">Contact Us</Row>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Row className="pzContact__contact-form">
              <Column className="pzContact__contact-form-row">
                <label htmlFor="name">Name</label>
                <Input name="name" required={true} maxLength={120} onChange={onChange} />
              </Column>
              <Column className="pzContact__contact-form-row">
                <label htmlFor="email">Email</label>
                <Input name="email" type="email" required={true} maxLength={254} onChange={onChange} />
              </Column>
              <Column className="pzContact__contact-form-row">
                <label htmlFor="message">Message</label>
                <Textarea name="message" required={true} maxLength={256} onChange={onChange} />
              </Column>
              <Column className="pzContact__contact-form-row pzContact__contact-form-submit-button">
                <Button text="Send" type="submit" />
              </Column>
            </Row>
          </form>
        </Column>
      </Row>
    </Page>
  );
};

export default Contact;
