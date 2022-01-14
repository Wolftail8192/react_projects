import './Flight.css';
export default function Flight ({item:value}) {
    return(
        <div className ='ff'>
            <div className = 'left'>

                {value.mission_name} - {value.launch_year}
            </div>
            <div className = 'right'>
                <img src={value.links.mission_patch} alt="mission_patch"/>
            </div>
        </div>
    )
}
