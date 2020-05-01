import * as React from 'react';

import { Page } from '../../components/page';
import { Button } from '../../components/button';
import { Row, Column } from '../../components/grid';
import { Input } from '../../components/input';
import { Textarea } from '../../components/textarea';

import './index.scss';

const About = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const onSubmit = (event: any) => {
    event.preventDefault();
    alert(`name: ${name}, email: ${email}, message: ${message}`);
  };

  const onNameChange = (event: any) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onEmailChange = (event: any) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onMessageChange = (event: any) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <Page title="About">
      <Row className="pzAbout">
        <Column spanLg={6} spanXl={6} className="pzAbout__about-section">
          <Row>
            <Column className="pzAbout__about-section-title">About</Column>
          </Row>
          <Row>
            <Column className="pzAbout__about-section-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Column>
          </Row>
        </Column>
        <Column spanLg={6} spanXl={6} className="pzAbout__contact-form">
          <Row>
            <Column className="pzAbout__contact-form-title">Contact</Column>
          </Row>
          {/* TODO: GP - implement send email lambda and adjust the form */}
          <form name="contactForm" onSubmit={onSubmit}>
            <Row>
              <Column className="pzAbout__contact-form-row">
                <label htmlFor="name">Name</label>
                <Input id="name" onChange={onNameChange} required={true} />
              </Column>
              <Column className="pzAbout__contact-form-row">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" onChange={onEmailChange} required={true} />
              </Column>
              <Column className="pzAbout__contact-form-row">
                <label htmlFor="message">Email</label>
                <Textarea id="message" onChange={onMessageChange} required={true} />
              </Column>
              <Column className="pzAbout__contact-form-row pzAbout__contact-form-submit-button">
                <Button text="Send" type="submit" />
              </Column>
            </Row>
          </form>
        </Column>
      </Row>
    </Page>
  );
};

export default About;
