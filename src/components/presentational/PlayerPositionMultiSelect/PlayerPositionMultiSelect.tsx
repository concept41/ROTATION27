import React, { useCallback, useEffect, useState } from 'react';
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS, VOLLEYBALL_POSITION_TO_ABBREVIATION } from 'components/types/VOLLEYBALL_PLAYER_POSITIONS.enum';
import { MultiSelect, MultiSelectOptionProps } from '../MultiSelect/MultiSelect';

interface PlayerPositionMultiSelectProps {
  className?: string;
  handleChange: (positions: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[]) => void;
  initialPlayerPositions?: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[];
}

const convertPositionsToMultiSelectOptions = (positions: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[]) => {
  return Object.entries(VOLLEYBALL_POSITION_TO_ABBREVIATION).map(([position, abbreviation]) => {
    return {
      label: position,
      value: abbreviation,
      selected: positions.includes(abbreviation),
    }
  });
}


export const PlayerPositionMultiSelect = ({
  className,
  handleChange,
  initialPlayerPositions = [],
}: PlayerPositionMultiSelectProps) => {
  const [playerPositionOptions, setPlayerPositionOptions] = useState<MultiSelectOptionProps[]>(convertPositionsToMultiSelectOptions([]));
  const handleSelect = useCallback((value: string, selected: boolean) => {
    setPlayerPositionOptions(initialPositionOptions => {
      return [...initialPositionOptions].map(positionOption => {
        if (positionOption.value === value) {
          return {
            ...positionOption,
            selected,
          };
        }
        return positionOption;
      });
    });
  }, [setPlayerPositionOptions]);

  useEffect(() => {
    const selectedPositions = playerPositionOptions
      .filter(({selected}) => selected)
       .map(({ value }) => value as VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS)

    handleChange(selectedPositions);
  }, [playerPositionOptions, handleChange]);

  useEffect(() => {
    if (initialPlayerPositions.length) {
      setPlayerPositionOptions(convertPositionsToMultiSelectOptions(initialPlayerPositions));
    }
  }, [initialPlayerPositions, setPlayerPositionOptions]);

  return (
    <MultiSelect
      options={playerPositionOptions}
      handleSelect={handleSelect}
      placeholder='select positions:'/>
  )
}
