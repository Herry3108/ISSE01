using BlazorReactiveProgramming.Models;
using Fluxor;

namespace BlazorReactiveProgramming.State.Houses
{
    [FeatureState]
    public class HouseState
    {

        public bool IsLoading { get; }
        public IEnumerable<House> HousesData { get; }

        public HouseState() {
            IsLoading = false;
            HousesData = Array.Empty<House>();
        }
        public HouseState(bool isLoading, IEnumerable<House> houses)
        {
            IsLoading = isLoading;
            HousesData = houses ?? Array.Empty<House>();
        }
    }
}
