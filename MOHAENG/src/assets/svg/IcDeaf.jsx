import PropTypes from 'prop-types';

const SvgIcDeaf = ({ stroke = '#000', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 33"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.632}
      d="M6.079 13.467c0-1.876.377-3.675 1.06-5.269m2.437-3.614C11.312 2.877 13.492 1.963 15.733 2c2.24.039 4.398 1.028 6.093 2.794 1.694 1.766 2.816 4.195 3.17 6.86.352 2.664-.087 5.393-1.242 7.705a16 16 0 0 1-.86 1.248m-2.78 3.208a14 14 0 0 0-1.798 3.729 7.2 7.2 0 0 1-1.737 2.447 5.7 5.7 0 0 1-2.437 1.323 5.1 5.1 0 0 1-2.673-.056 5.8 5.8 0 0 1-2.399-1.422"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.632}
      d="M13.448 9.234c.782-.583 1.705-.832 2.618-.705.914.128 1.765.623 2.416 1.406.65.783 1.062 1.807 1.168 2.907s-.1 2.211-.585 3.153M2 2.009l24.474 29.465"
    />
  </svg>
);

SvgIcDeaf.propTypes = {
  stroke: PropTypes.string,
};

export default SvgIcDeaf;
