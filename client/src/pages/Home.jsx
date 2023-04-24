import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

export default function Home() {

    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.div className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                </motion.div>
            )}
        </AnimatePresence>
    );
}