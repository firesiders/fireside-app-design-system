interface Props {
  size: string;
  fontWeight: number;
}

export function Type({ size, fontWeight }: Props) {
  const fontWeightName = () => {
    switch (fontWeight) {
      case 400:
        return 'regular';
      case 500:
        return 'semi-bold';
      case 700:
        return 'bold';
      default:
        return '';
    }
  };

  return (
    <div className='typeset__item'>
      <p style={{ fontSize: size, fontWeight }}>Fireside</p>
      <p className='typeset__info' style={{ fontSize: size, fontWeight }}>
        <span>{size},</span>
        <span>{fontWeightName()}</span>
      </p>
    </div>
  );
}

export default Type;
