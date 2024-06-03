using BlazorReactiveProgramming.Pages;
using Fluxor;

namespace BlazorReactiveProgramming.State.Houses
{
    public class Reducers
    {
            [ReducerMethod]
            public static HouseState ReduceFetchDataAction(HouseState state, FetchDataAction action) =>
              new(isLoading: true, houses: null);

            [ReducerMethod]
            public static HouseState ReduceFetchDataResultAction(HouseState state, FetchDataResultAction action) =>
              new(isLoading: false, houses: action.Houses);

    }
}
