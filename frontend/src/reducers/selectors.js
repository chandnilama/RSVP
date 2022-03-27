// export const selectLocation = ({locations, reviews}, id) => {
//     if (locations[id]){
//         const location = locations[id];
        
//         return location
//     }
//     return {};
// };

export const asArray = ({ locations }) => {
    
    return Object.keys(locations).map( key => locations[key])
}
 