import React from 'react';
import { motion } from 'framer-motion';

type FadingContainerProps = {
    children: React.ReactNode;
};

const FadingContainer = ({ children }: FadingContainerProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default FadingContainer;