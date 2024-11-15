'use client';

import {
  Box,
  Card,
  Center,
  Container,
  Text,
  Button,
  Title,
  Blockquote,
} from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useState } from 'react';
import Pin from '../../../components/Pins';
import { motion } from 'framer-motion';
import SpendPage from './spend';

const floatUpKeyframes = `
  @keyframes floatUp {
    0% {
      opacity: 1;
      bottom: 0%;
    }
    100% {
      opacity: 0;
      bottom: 100%;
    }
  }
`;

export default function StoriesPage() {
  const [totalEarned, setTotalEarned] = useState(0);
  const [floatingNumbers, setFloatingNumbers] = useState<number[]>([]);

  const addMillion = () => {
    setTotalEarned((prev) => prev + 1_000_000);
    setFloatingNumbers((prev) => [...prev, Date.now()]);
    setTimeout(() => {
      setFloatingNumbers((prev) => prev.slice(1));
    }, 2000);
  };

  return (
    <>
      <style>{floatUpKeyframes}</style>
      <Container>
        <BackButton href="/stories" />
        <Card shadow="sm" radius="md" withBorder pt={40}>
          <Pin left="50%" top="-20px" color="red" />
          <Text size="xl" my="xl" style={{ textAlign: 'center' }}>
            Imagine you have a check for{' '}
            <Text component="span" fw={700}>
              a million dollars.
            </Text>
          </Text>
          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{
              rotateX: 0,
              opacity: 1,
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 1.4,
              type: 'spring',
              rotate: {
                repeat: Infinity,
                duration: 1.4,
                ease: 'easeInOut',
              },
            }}
            viewport={{ once: true }}
          >
            <Card
              mt="md"
              my="xl"
              padding="xl"
              radius="md"
              withBorder
              style={{
                backgroundColor: '#f8f9fa',
                fontFamily: 'serif',
                position: 'relative',
                minHeight: '200px',
              }}
            >
              <Text
                size="sm"
                c="dimmed"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                }}
              >
                No. 12345
              </Text>

              <Text
                size="xl"
                fw={700}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '2.5rem',
                }}
              >
                $1,000,000.00
              </Text>

              <Text
                size="sm"
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '20px',
                }}
              >
                PAY TO THE ORDER OF ___________________________
              </Text>

              <Text
                size="sm"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  fontStyle: 'italic',
                }}
              >
                MEMO: this is a piece of paper
              </Text>
            </Card>
          </motion.div>
          <Text size="xl" my="xl" style={{ textAlign: 'center' }}>
            It's just a piece of paper, it's around <b>0.1mm</b> thick. About
            the width of 2 human hairs.
          </Text>
          <Text size="xl" my="xl" style={{ textAlign: 'center' }}>
            Now, imagine stacking the checks on top of each other.
          </Text>

          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '200px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    transform: `translateZ(${i * 4}px)`,
                  }}
                >
                  <Box
                    style={{
                      position: 'absolute',
                      width: '120px',
                      height: '60px',
                      backgroundColor: '#fff',
                      border: '1px solid #000',
                      boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
          <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
            And keep stacking{' '}
            <Text component="span" fw={700}>
              ...
            </Text>
          </Text>
          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '500px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                left: '50%',
                top: '75%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    transform: `translateZ(${i * 4}px)`,
                  }}
                >
                  <Box
                    style={{
                      position: 'absolute',
                      width: '120px',
                      height: '60px',
                      backgroundColor: '#fff',
                      border: '1px solid #000',
                      boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
          <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
            And keep stacking...{' '}
            <Text component="span" fw={700}>
              ...
            </Text>
          </Text>
          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '1200px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                left: '50%',
                top: '90%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(300)].map((_, i) => (
                <Box
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '60px',
                    backgroundColor: '#fff',
                    border: '1px solid #000',
                    transform: `translateZ(${i * 4}px)`,
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </Box>
          </Box>
          <Text size="xl" my="xl" style={{ textAlign: 'center' }}>
            Until you have the net worth of the world's richest man{' '}
            <Text component="span" fw={700}>
              Elon Musk:
            </Text>
          </Text>
          <Text size={'3rem'} my="xl" fw={800} style={{ textAlign: 'center' }}>
            $320 Billion
          </Text>
          <Box mt="xl">
            <Text size="xl" my="xl" style={{ textAlign: 'center' }}>
              It'll reach the height of a <b>10-story</b> building.
            </Text>
            <Box
              style={{ position: 'relative', height: '400px', width: '100%' }}
            >
              <Box
                style={{
                  position: 'absolute',
                  left: '20%',
                  bottom: 0,
                  width: '4px',
                  height: '300px',
                  backgroundColor: '#228be6',
                }}
              >
                <Text
                  size="sm"
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  32 meters
                </Text>
              </Box>
              <Box
                style={{
                  position: 'absolute',
                  left: '60%',
                  bottom: '300px',
                  width: '20px',
                  height: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Head */}
                <Box
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                  }}
                />
                {/* Body */}
                <Box
                  style={{
                    width: '2px',
                    height: '14px',
                    backgroundColor: '#000',
                  }}
                />
                {/* Arms */}
                <Box
                  style={{
                    position: 'absolute',
                    top: '12px',
                    width: '16px',
                    height: '2px',
                    backgroundColor: '#000',
                  }}
                />
                {/* Legs */}
                <Box
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '12px',
                    height: '8px',
                    borderBottom: '2px solid #000',
                    borderLeft: '2px solid #000',
                    borderRight: '2px solid #000',
                    transform: 'rotate(180deg)',
                  }}
                />
              </Box>

              <Box
                style={{
                  position: 'absolute',
                  left: '60%',
                  bottom: 0,
                  width: '100px',
                  height: '300px',
                  backgroundColor: '#868e96',
                  display: 'flex',
                  flexDirection: 'column-reverse',
                }}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <Box
                    key={i}
                    style={{
                      position: 'relative',
                      height: '10%',
                      width: '100%',
                      backgroundColor: '#868e96',
                      borderTop: '1px solid #495057',
                      borderLeft: '8px solid #495057',
                      borderRight: '8px solid #adb5bd',
                    }}
                  />
                ))}
                <Text
                  size="sm"
                  style={{
                    position: 'absolute',
                    left: '120px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  10 story building
                </Text>
              </Box>
            </Box>
          </Box>
          <Text size="xl" mt={150} mb="md" style={{ textAlign: 'center' }}>
            <b>To put this in perspective:</b> If you jump off this stack of 1
            million dollar checks... You will most definitely{' '}
            <Text component="span" c="red" fw={700}>
              die
            </Text>{' '}
            if you try.
          </Text>

          <Title order={1} mt={75} style={{ textAlign: 'center' }}>
            Another way to put it:
          </Title>

          <Text size="xl" mt="md" style={{ textAlign: 'center' }}>
            If you somehow made a <b>$1 million per hour</b>, it'll take you
            more than a <b>century</b> to make as much as Elon Musk.
          </Text>

          <Card m="xl" shadow="sm" radius="md" withBorder>
            <Text fw={700} size="xl" mt="sm" style={{ textAlign: 'center' }}>
              Try it yourself!
            </Text>
            <Box
              mt="xl"
              style={{
                position: 'relative',
                height: '100px',
                overflow: 'hidden',
              }}
            >
              {floatingNumbers.map((timestamp) => (
                <Text
                  key={timestamp}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#40c057',
                    animation: 'floatUp 2s linear forwards',
                  }}
                >
                  +$1,000,000
                </Text>
              ))}
              <Text style={{ textAlign: 'center' }}>
                {totalEarned >= 320_000_000_000 ? (
                  <Text c="green" component="span">
                    Congratulations! You're now richer than Elon Musk! ↑
                  </Text>
                ) : (
                  <Text c="red" component="span">
                    ↓ You're still poorer than Elon Musk...
                  </Text>
                )}
              </Text>
              <Text
                size={'2rem'}
                fw={700}
                my="md"
                style={{ textAlign: 'center' }}
              >
                Total earned: ${totalEarned.toLocaleString()}
              </Text>
            </Box>

            <Center>
              <Button w="20%" onClick={addMillion} color="green">
                Add $1,000,000
              </Button>
            </Center>
            <Blockquote mt="md" p="md">
              * This is a demo. No money will be transferred.
            </Blockquote>
          </Card>
          <SpendPage />
        </Card>
      </Container>
    </>
  );
}
