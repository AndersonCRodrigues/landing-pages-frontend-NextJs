import P from 'prop-types';
import { Home } from '../templates/Home';
import config from '../config';
import { mapData } from '../api/map-data';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
