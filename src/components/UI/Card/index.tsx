import type * as Stitches from '@stitches/react';

import { styled } from '@/lib/stitches.config';

export const CardSize = {
    small: {
        paddingRight: '50px',
        width: '200px',
        height: '130px',
    },
    large: {
        left: '50px',
        width: '300px',
        height: '190px',
    },
} as const;

export const CardVariant = {
    pc: {
        backgroundColor: '#FDD36A',
        color: '$white',
    },
    jun: {
        backgroundColor: '#3A1078',
        color: '$white',
    },
    hs: {
        backgroundColor: '#4D455D',
        color: '$white',
    },
    yh: {
        backgroundColor: '#191825',
        color: '$white',
    },
    ho: {
        backgroundColor: '#DDF7E3',
        color: '$grey4',
    },
    te: {
        backgroundColor: '#F5EAEA',
        color: '$grey4',
    },
    ji: {
        backgroundColor: '#ECF2FF',
        color: '$grey4',
    },
    ek: {
        backgroundColor: '#3F497F',
        color: '#fff',
    },
    default: {
        backgroundColor: '$white',
        color: '$grey4',
    },
};

const StyledCard = styled('div', {
    position: 'relative',
    top: 0,
    boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    padding: '20px 30px',
    variants: {
        variant: CardVariant,
        size: CardSize,
    },
    defaultVariants: {
        variant: 'default',
        size: 'small',
    },
});

export default StyledCard;
export type CardVariants = Stitches.VariantProps<typeof StyledCard>;
