import { Helmet } from 'react-helmet';

const AppHelmet = () => (
  <Helmet>
    <meta charset="UTF-8"></meta>
    <meta name="description" content="This app is for my crested geckos"></meta>
    <meta name="author" content="Rafał Stróżyk"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Gecko App</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Helmet>
);

export default AppHelmet;
