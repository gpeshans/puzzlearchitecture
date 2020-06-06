import * as React from 'react';

import { Page } from '../../components/page';
import { Button } from '../../components/button';
import { Row, Column } from '../../components/grid';
import { Input } from '../../components/input';
import { Textarea } from '../../components/textarea';

import './index.scss';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const emailAddress = 'puzzle.arch@outlook.com';

  const onSubmit = (event: any) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${name} (${email})`);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event: any) => {
    setMessage(event.target.value);
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
          <form name="contactForm" onSubmit={onSubmit}>
            <Row className="pzContact__contact-form">
              {/* TODO: GP - implement send email lambda and adjust the form */}
              <Column className="pzContact__contact-form-row">
                <label htmlFor="name">Name</label>
                <Input id="name" onChange={onNameChange} required={true} maxLength={120} />
              </Column>
              <Column className="pzContact__contact-form-row">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" onChange={onEmailChange} required={true} maxLength={254} />
              </Column>
              <Column className="pzContact__contact-form-row">
                <label htmlFor="message">Message</label>
                <Textarea id="message" onChange={onMessageChange} required={true} maxLength={256} />
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
