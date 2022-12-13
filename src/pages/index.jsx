import P from 'prop-types';
import { Home } from '../templates/Home';
import config from '../config';
import { mapData } from '../api/map-data';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages(config.defaultSlug);
  } catch (e) {
    console.log('Error 404');
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
