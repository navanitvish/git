import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videosArr = [
        "https://v4.cdnpk.net/videvo_files/video/free/video0454/large_watermarked/_import_6064f506306184.46906919_FPpreview.mp4",
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        "https://v1.cdnpk.net/videvo_files/video/free/video0545/large_watermarked/_import_6301c23829c483.55768451_FPpreview.mp4",
        "https://v3.cdnpk.net/videvo_files/video/premium/video0238/large_watermarked/06_day_part_II_725_lednik_S_handheld_FPpreview.mp4",
        "https://v4.cdnpk.net/videvo_files/video/free/video0454/large_watermarked/_import_6064f506306184.46906919_FPpreview.mp4",
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        "https://v1.cdnpk.net/videvo_files/video/free/video0545/large_watermarked/_import_6301c23829c483.55768451_FPpreview.mp4",
        "https://v4.cdnpk.net/videvo_files/video/free/video0454/large_watermarked/_import_6064f506306184.46906919_FPpreview.mp4",
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        "https://v1.cdnpk.net/videvo_files/video/free/video0545/large_watermarked/_import_6301c23829c483.55768451_FPpreview.mp4",
        
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={["column","row"]} h={"100vh"}>
    <VStack w={'full'}>
      <video
      controls
      controlsList='nodownload'
      src={videoSrc}
      style={{
        width:'100%',
        }}>

      </video>
      <VStack 
      alignItems={'flex-start'}
       p={'8'} 
       w={'full'}
        overflowY={'auto'}
      >
        <Heading>Sample Video 1</Heading>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi nihil at doloribus quibusdam,
            doloremque temporibus ratione similique numquam earum tenetur,
            sapiente optio eligendi nulla quis vel eos distinctio blanditiis.
        </Text>
      </VStack>
    </VStack>
    <VStack 
    w={['full', 'xl']} 
    alignItems={"stretch"} 
    p="8" 
    spacing={"auto"} 
    overflowY={'auto'}
    >
        
            {videosArr.map((item, index)=> (
                <Button variant={'ghost'} 
                colorScheme={'Purple'}
                onClick={() => setVideoSrc(item)}
                >
            
                Lecture {index + 1}
            </Button>
            ))
            }
        
      
    </VStack>
  </Stack>
  );
}

export default Videos
