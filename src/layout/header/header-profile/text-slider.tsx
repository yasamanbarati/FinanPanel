import { useEffect, useRef, useState } from 'react';
import { Typography, keyframes, styled } from '@mui/material';

const Container = styled('div')`
  width: 79px;
  position: relative;
  display: flex;
  height: 30px;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTypography = styled(Typography)({
  position: 'relative',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  flexShrink: 0,
});

const StyledSpan = styled('span')(({ theme }) => ({
  ...theme.typography.body2,
  position: 'absolute',
}));

const animate = keyframes`   
from {
   right: 0;
  transform: translate(100%, 0)
}
to {
 right: 100%;
  transform: translate(0, 0);
}
`;

interface Props {
  text: string;
}

export default function TextSlider({ text }: Props) {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current: spanElement } = spanRef;
    const { current: divElement } = divRef;

    if (!spanElement || !divElement) return;

    setIsOverflowing(divElement.clientWidth < spanElement.scrollWidth);
  }, [text]);

  return (
    <Container ref={divRef}>
      <StyledTypography
        variant="body2"
        fontWeight="600"
        sx={{ ml: 1, color: '#18181B' }}
        noWrap
      >
        {text && (
          <StyledSpan
            ref={spanRef}
            sx={{
              animation: isOverflowing
                ? `${animate} 20s infinite linear`
                : null,
              whiteSpace: 'nowrap!important',
            }}
          >
            {text}
          </StyledSpan>
        )}
      </StyledTypography>
      <Typography variant="subtitle1" fontWeight="400">
        Admin
      </Typography>
    </Container>
  );
}
