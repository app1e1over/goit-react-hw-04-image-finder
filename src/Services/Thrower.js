import axios from 'axios';

const key = '38473838-e891e831f166f48f183183908';

export const load = st => {
  if (st === undefined || st.loading || st.q==="") {
    console.log('no load');
    return;
  }
  const { q, page } = st;
  return (axios
    .get(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(r => r.data)
    .then(data => {
      let copy = [...st.images];
      if (copy.includes(data.hits[0])) {
        return;
      }
      copy = copy.concat(data.hits);
      return {images:copy, more: page*12<data.totalHits};
    }));
};
