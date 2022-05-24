using System;

namespace programa
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroDeVezes = 5;
        
            for(int i=1; numeroDeVezes >= i ; i++){
                Console.WriteLine($"Bem vindo ao curso de dotnet {i}");
            }
        }
    }
}
