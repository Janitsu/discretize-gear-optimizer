import ShareIcon from '@mui/icons-material/Share';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import Info from '../../baseComponents/Info';
import Section from '../../baseComponents/Section';
import URLStateExport from '../../url-state/URLStateExport';
import BuildShareModal from '../results/BuildShareModal/BuildShareModal';

const SharingSection = () => {
  const { t } = useTranslation();
  const character = useSelector(getSelectedCharacter);

  const exoticsEnabled = character?.settings?.cachedFormState?.priorities?.exotics?.enabled;

  return (
    <Section
      title={
        <a style={{ textDecoration: 'none', color: 'inherit' }} id="#share" href="#share">
          {t('Share Builds')}
        </a>
      }
      helpText={t('Generate shareable links here!')}
      content={
        <>
          <URLStateExport />{' '}
          <Typography variant="body1" component="span">
            <Trans>Share settings.</Trans>
          </Typography>{' '}
          <Typography variant="caption">
            <Trans>
              Includes the current selected options on this page only. Does not include result
              builds in the table above
            </Trans>
          </Typography>
          <br />
          <BuildShareModal title={t('Build Share Settings')} character={character}>
            {(handleOpen) => (
              <IconButton disabled={!character} onClick={() => handleOpen()} size="large">
                <ShareIcon />
              </IconButton>
            )}
          </BuildShareModal>{' '}
          <Typography variant="body1" component="span">
            <Trans>Share Character.</Trans>{' '}
          </Typography>
          <Typography variant="caption">
            {' '}
            <Trans>Select weapons and skills as you please.</Trans>
          </Typography>
          {exoticsEnabled ? (
            <Info icon={<WarningAmberIcon />}>
              {t('Warning: Shared character links do not currently support exotic gear.')}
            </Info>
          ) : null}
        </>
      }
      extraInfo={<></>}
    />
  );
};

export default SharingSection;
