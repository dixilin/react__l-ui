import { Placement } from '../types/placement';

interface IUsePlacementProps {
  triggerRect: DOMRect | null;
  contentRect: DOMRect | null;
  placement?: Placement;
}

interface IPosition {
  left: number;
  top: number;
}

const getPosition = ({ triggerRect, contentRect, placement }: IUsePlacementProps): IPosition => {
  let left = 0,
    top = 0;
  const DISTANCE = 12;
  const flag = triggerRect && contentRect;
  switch (placement) {
    case Placement.BOTTOM:
      left = flag ? triggerRect.left + (triggerRect.width - contentRect.width) / 2 : 0;
      top = flag ? triggerRect.top + triggerRect.height + DISTANCE : 0;
      break;
    case Placement.BOTTOM_LEFT:
      left = flag ? triggerRect.left : 0;
      top = flag ? triggerRect.top + triggerRect.height + DISTANCE : 0;
      break;
    case Placement.BOTTOM_RIGHT:
      left = flag ? triggerRect.left + (triggerRect.width - contentRect.width) : 0;
      top = flag ? triggerRect.top + triggerRect.height + DISTANCE : 0;
      break;
    case Placement.LEFT:
      left = flag ? triggerRect.left - contentRect.width - DISTANCE : 0;
      top = flag ? triggerRect.top + (triggerRect.height - contentRect.height) / 2 : 0;
      break;
    case Placement.RIGHT:
      left = flag ? triggerRect.left + triggerRect.width + DISTANCE : 0;
      top = flag ? triggerRect.top + (triggerRect.height - contentRect.height) / 2 : 0;
      break;
    case Placement.TOP:
      console.log('triggerRect', triggerRect);
      left = flag ? triggerRect.left + (triggerRect.width - contentRect.width) / 2 : 0;
      top = flag ? triggerRect.top - triggerRect.height - DISTANCE : 0;
      break;
    case Placement.TOP_LEFT:
      left = flag ? triggerRect.left : 0;
      top = flag ? triggerRect.top - triggerRect.height - DISTANCE : 0;
      break;
    case Placement.TOP_RIGHT:
      left = flag ? triggerRect.left + (triggerRect.width - contentRect.width) : 0;
      top = flag ? triggerRect.top - triggerRect.height - DISTANCE : 0;
      break;
    default:
      break;
  }
  return { left, top };
};

const usePlacement = ({ triggerRect, contentRect, placement }: IUsePlacementProps): IPosition => {
  return getPosition({ triggerRect, contentRect, placement });
};

export default usePlacement;
