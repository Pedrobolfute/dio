using System;

namespace Start
{
    class Program
    {
        static void Main(string[] args)
        {
            double A, B, C;
            A = double.Parse(Console.ReadLine());
            B = double.Parse(Console.ReadLine());
            C = double.Parse(Console.ReadLine());
//TODO: Complete os espaços em branco com uma possível solução para o desafio
           // if (A < 10 && B < 10 && C < 10)
          //  {
              double MEDIA = ((A*2) + (B*3) + (C*5))/10;
              Console.WriteLine($"MEDIA = {MEDIA :N1}");
          //  }
          //  else 
          //  {
          //    Console.WriteLine("Presentation Error");
          //  }
            
            //Console.ReadKey();
        }
    }
}

//Aparentemente na plataforma da DIO deu certo.