using BlazorReactiveProgramming.Models;

namespace BlazorReactiveProgramming.State.Houses
{
    public class FetchDataResultAction
    {
        public IEnumerable<House> Houses { get; }

        public FetchDataResultAction(IEnumerable<House> houses)
        {
            Houses = houses;
        }
    }
}
