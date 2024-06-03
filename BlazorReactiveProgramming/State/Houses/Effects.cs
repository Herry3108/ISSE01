using System.Net.Http.Json;
using Fluxor;
using BlazorReactiveProgramming.Models;

namespace BlazorReactiveProgramming.State.Houses
{
    public class Effects
    {
        private readonly HttpClient _httpClient;

        private readonly List<House> houseData = new List<House>
        {
            new House
            {
                Id = "0367baf3-1cb6-4baf-bede-48e17e1cd005",
                Name = "Gryffindor",
                Founder = "Godric Gryffindor",
                Element = "Fire"
            },
            new House
            {
                Id = "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
                Name = "Ravenclaw",
                Founder = "Rowena Ravenclaw",
                Element = "Air"
            },
            new House
            {
                Id = "85af6295-fd01-4170-a10b-963dd51dce14",
                Name = "Hufflepuff",
                Founder = "Helga Hufflepuff",
                Element = "Earth"
            },
            new House
            {
                Id = "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
                Name = "Slytherin",
                Founder = "Salazar Slytherin",
                Element = "Water"
            }
        };

        public Effects(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [EffectMethod]
        public async Task HandleFetchDataAction(FetchDataAction action, IDispatcher dispatcher)
        {
            await Task.Delay(1000);

            var houses = houseData.ToArray();
            if (houses is not null)
            {
                dispatcher.Dispatch(new FetchDataResultAction(houses: houses));
            }
        }

    }
}