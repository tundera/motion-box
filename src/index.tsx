import { Box, BoxProps } from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

type MotionBoxProps = Omit<BoxProps, keyof MotionProps>

const MotionBox = motion<MotionBoxProps>(Box)

export default MotionBox
