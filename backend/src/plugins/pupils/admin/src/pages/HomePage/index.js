/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useRef } from 'react';
import { Typography } from '@strapi/design-system/Typography';
import { Button } from '@strapi/design-system/Button';
import Upload from '@strapi/icons/Upload';
import Check from '@strapi/icons/Check';
import { ModalLayout, ModalBody, ModalHeader, ModalFooter } from '@strapi/design-system/ModalLayout';
import { Select, Option } from '@strapi/design-system/Select';
import { Stack } from '@strapi/design-system/Stack';
import { Box } from '@strapi/design-system/Box';
import { Grid, GridItem } from '@strapi/design-system/Grid';


const HomePage = () => {

  const [modalVisible, setModalVisibilty] = useState(false);
  const [house, setHouse] = useState();
  const fileInput = useRef();

  const showModal = () => setModalVisibilty(true);
  const closeModal = () => setModalVisibilty(false);

  const handleHouseChange = (value) => setHouse(value)

  const handleSelectFile = () => fileInput.current.click();

  console.console.log([fileInput, fileInput.current.value])

  const saveDisabled = !(house && fileInput.current.value)



  return (
    < >
      <input
        type="file"
        style={{ display: "block", visibility: "hidden", width: 0, height: 0 }}
        accept=".xls"
        ref={fileInput}
      />

      {modalVisible &&
        <ModalLayout onClose={closeModal} labelledby="modal-title">
          <ModalHeader>
            <Typography fontWeight="bold" textColor="neutral800" variant="alpha" id="modal-title">
              Import New Pupils
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Grid gap={2}>
              <GridItem col={6}>
                <Select required labed="Select a house" onChange={handleHouseChange} value={house}>
                  <Option value="boyce">Boyce</Option>
                  <Option value="de_la_mare">De La Mare</Option>
                  <Option value="groves">Grove</Option>
                  <Option value="stainer">Stainer</Option>
                </Select>
              </GridItem>

              <GridItem col={6}>
                <Button variant='secondary' endIcon={<Upload />} onClick={handleSelectFile}>Select File</Button>
              </GridItem>

            </Grid>
          </ModalBody>
          <ModalFooter startActions={
            <Button onClick={closeModal} variant="tertiary">Cancel</Button>
          } endActions={
            <Button endIcon={<Check />}>Save</Button>
          } />
        </ModalLayout>
      }

      <Box>
        <Stack spacing={2} padding={4}>
          <Typography variant="alpha">Import Pupils</Typography>
          <Box>
            <Button variant='secondary' endIcon={<Upload />} onClick={showModal}>Import New Pupils</Button>
          </Box>
        </Stack>
      </Box>

      
    </>
  );
};

export default memo(HomePage);
