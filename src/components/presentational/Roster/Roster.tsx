import React, { useCallback, useRef, useState } from 'react';
import './Roster.scss';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS } from 'components/types/VOLLEYBALL_PLAYER_POSITIONS.enum';
import { AddButton } from '../AddButton/AddButton';
import { AddPlayerModal } from '../AddPlayerModal/AddPlayerModal';
import { PlayerId, PlayerState } from 'components/types/PlayerTypes';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Identifier, XYCoord } from 'dnd-core';
import { EditPlayerModal } from '../EditPlayerModal/EditPlayerModal';


interface RosterProps {
  players: PlayerState[];
  handleMove: (from: number, to: number) => void;
}

export const Roster = ({
  players,
  handleMove,
}: RosterProps) => {
  // local state
  const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);
  const [isEditPlayerModalOpen, setIsEditPlayerModalOpen] = useState(false);
  const [playerToEdit, setPlayerToEdit] = useState<PlayerId | null>(null);

  // handlers
  const openAddPlayerModal = useCallback(() => {
    setIsAddPlayerModalOpen(true);
  }, [setIsAddPlayerModalOpen]);

  const closeAddPlayerModal = useCallback(() => {
    setIsAddPlayerModalOpen(false);
  }, [setIsAddPlayerModalOpen]);

  const openEditPlayerModal = useCallback((id: PlayerId) => {
    setIsEditPlayerModalOpen(true);
    setPlayerToEdit(id);
  }, [setIsEditPlayerModalOpen]);

  const closeEditPlayerModal = useCallback(() => {
    setIsEditPlayerModalOpen(false);
    setPlayerToEdit(null);
  }, [setIsEditPlayerModalOpen]);



  return (
    <div className='Roster'>
      <FlexBox direction='column' alignItems='center'>
        <span className='RosterTitle'>Placeholder for roster</span>
        <FlexBox direction='column' alignItems='center'>
          <DndProvider backend={HTML5Backend}>
            {
              players.map((player: PlayerState, idx: number) => {
                return (
                  <RosterPlayer key={player.id} player={player} idx={idx} handleMove={handleMove} handleOpenEditModal={openEditPlayerModal}/>
                );
              })
            }
          </DndProvider>
        </FlexBox>
        <FlexBox justify='center'>
          <AddButton handleClick={openAddPlayerModal}/>
        </FlexBox>
      </FlexBox>
      <AddPlayerModal isOpen={isAddPlayerModalOpen} handleClose={closeAddPlayerModal}/>
      <EditPlayerModal isOpen={isEditPlayerModalOpen} handleClose={closeEditPlayerModal} playerToEdit={playerToEdit}/>
    </div>
  );
}

const ITEM_TYPES = {
  ROSTER_PLAYER: 'ROSTER_PLAYER',
}

interface RosterPlayerProps {
  player: PlayerState;
  idx: number;
  handleMove: (from: number, to: number) => void;
  handleOpenEditModal: (id: PlayerId) => void;
}

export const RosterPlayer = ({
  player,
  idx,
  handleMove,
  handleOpenEditModal,
}: RosterPlayerProps) => {
  // drag and drop
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    RosterPlayerProps,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ITEM_TYPES.ROSTER_PLAYER,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: RosterPlayerProps, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.idx
      const hoverIndex = idx

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      handleMove(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.idx = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPES.ROSTER_PLAYER,
    item: () => {
      return { player, idx }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  // handlers
  const handleClick = useCallback(() => {
    handleOpenEditModal(player.id);
  }, [handleOpenEditModal, player])

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className='RosterPlayer'
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      onClick={handleClick}>
      <div className='innerContainer'>
        <FlexBox>
          <div className='PlayerStatus'></div>
          <FlexBox
            direction='column'
            alignItems='center'
            className='PlayerName'
          >
            <span>{player.name}</span>
          </FlexBox>
          <RosterPlayerPositionTag position={player.position[0]}/>
        </FlexBox>
      </div>
    </div>
  )
}

interface RosterPlayerPositionTagProps {
  position: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS;
}

const RosterPlayerPositionTag = ({ position }: RosterPlayerPositionTagProps) => {
  return (
    <FlexBox
      direction='column'
      alignItems='center'
      className={`PlayerPosition ${position}`}
    >
      <span>{position ? `${position}` : 'X'}</span>
    </FlexBox>
  );
}
