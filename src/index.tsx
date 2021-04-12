import type { FC } from 'react';

import { HTMLChakraProps, chakra } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;

export type MotionBoxProps = Merge<
  HTMLChakraProps<'div'>,
  HTMLMotionProps<'div'>
>;

const MotionBox: FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
