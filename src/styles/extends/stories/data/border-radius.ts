interface borderRadiusDataProps {
  [index: string]: borderItemProps;
}

interface borderItemProps {
  code: number;
  caseList: string[];
}

export const borderRadiusData: borderRadiusDataProps = {
  xl: { code: 16, caseList: ['Large Header Modal', 'Dialog', 'etc'] },
  lg: { code: 12, caseList: ['Medium Header Modal', 'Large Container', 'etc'] },
  md: { code: 8, caseList: ['Small Container', 'etc'] },
  sm: { code: 6, caseList: ['Button', 'Tag', 'Chip', 'etc'] },
  xs: { code: 4, caseList: ['Tiny Little Things', 'etc'] },
};

export default borderRadiusData;
