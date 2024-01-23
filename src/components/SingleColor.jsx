import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color copied to clipboard');
      } catch (error) {
        toast.error('color copy failed to clipboard');
      }
    } else {
      toast.error('Clipboard access unavailable');
    }
  };
  return (
    <article
      key={index}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveClipboard}
    >
      <p className='color-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;
