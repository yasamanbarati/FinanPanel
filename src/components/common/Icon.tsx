import Image from 'next/image';
import React from 'react';

interface Props {
  icon: IconType;
}

//=========================================//
export function Icon({ icon }: Props) {
  return (
    <Image src={`/static/icon/${icon}.svg`} width={24} height={24} alt="icon" />
  );
}
