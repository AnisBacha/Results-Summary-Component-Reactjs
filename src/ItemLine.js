import MemoryIcon from './images/icon-memory.svg';
import ReactionIcon from './images/icon-reaction.svg';
import VerbalIcon from './images/icon-verbal.svg';
import VisualIcon from './images/icon-visual.svg';

const ItemLine = ( { item } ) => {
    let icon = item.category === 'Memory' ? MemoryIcon :
               item.category === 'Reaction' ? ReactionIcon:  
               item.category === 'Verbal' ? VerbalIcon:
               VisualIcon;
    return (
        <li className={item.category}>
            <p>
                <img src={icon} alt='icon'/>
                {item.category}
            </p>
            <p className='summary__p'> <span className="summary__span">{item.score} &nbsp; </span> / 100</p>
        </li>
    )
}

export default ItemLine
