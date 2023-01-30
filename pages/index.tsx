import { Accomplish, ContactForm, Influence, Intro, Product } from 'components/Home';

Home.title = 'Web Development';

export default function Home() {
  return (
    <>
      <main>
        <Intro />

        <Product />

        <Accomplish />

        <Influence />

        <ContactForm />
      </main>
    </>
  );
}
