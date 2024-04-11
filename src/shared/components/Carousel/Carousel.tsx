import { ReactNode, useState } from 'react';
import ArrowLeft from '@/assets/arrow-left.svg';
import { Box, Button } from '@/shared';

type CarouselProps = {
  items: ReactNode[];
  onSelect: (index: number) => void;
};

export const Carousel = ({ items, onSelect }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === totalItems - 1;

  const prev = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(prevIndex);
    onSelect(prevIndex);
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % totalItems;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    onSelect(nextIndex);
  };

  const getTranslateX = () => {
    const itemWidth = 208;
    const itemMargin = 10;
    const lastItemMargin = 30;
    const lastItemIndex = totalItems - 1;
    const isLastItem = items.length > 2 && currentIndex === lastItemIndex;
    const translateX = isLastItem
      ? lastItemIndex * itemWidth + lastItemMargin
      : currentIndex * itemWidth + currentIndex * itemMargin;

    return `translateX(calc(-${translateX}px))`;
  };

  return (
    <Box position="relative" width="100%" height="130px">
      {items.length !== 0 && (
        <>
          <Button
            onClick={prev}
            variant="ghost"
            disabled={isFirstItem}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <img src={ArrowLeft} alt="이전 전환" />
          </Button>
          <Button
            onClick={next}
            variant="ghost"
            disabled={isLastItem}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Box transform="rotate(180deg)">
              <img src={ArrowLeft} alt="다음 전환" />
            </Box>
          </Button>
        </>
      )}
      <Box position="absolute" width="228px" top="0" left="50%" transform="translateX(-50%)" overflow="hidden">
        <Box display="flex" transform={getTranslateX()} transition="transform 0.3s">
          {items.map((item, index) => {
            const itemMarginLeft = index === 0 ? '12px' : '10px';
            return (
              <Box key={index} flexShrink={0} width="208px" marginLeft={itemMarginLeft}>
                {item}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
