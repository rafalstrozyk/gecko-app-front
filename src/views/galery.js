import Galery from 'components/galery';
import { imgData } from 'data/data';

const GalerySite = () => (
  <>
    <Galery images={imgData} title="All Geckos" />
    <Galery images={imgData} title="Name gecko galery" />
  </>
);

export default GalerySite;
