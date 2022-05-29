// Abaixo segue um exemplo de código que você pode ou não utilizar
using System;
using System.Globalization;

class DIO {

  static void Main(string[] args) {

    double pi, raio, volume;
    pi = 3.14159;
 //TODO: Complete os espaços em branco com uma possível solução para o desafio
    Console.WriteLine("Entrada: ");
    var ler = Console.ReadLine();
    raio = Convert.ToDouble(ler);
    
    volume = ( 4.0/3 ) * pi * Math.Pow( raio , 3 );
    
    Console.WriteLine($"VOLUME = {volume.ToString("F3")}");
    }

}
//Aqui deu certo na hora de enviar, mas no vscode deu errado.
//TODO: pesquisar a menssagem de erro, e ver o método ToDouble()


// Código que deu certo na plataforma da DIO
/*
// Abaixo segue um exemplo de código que você pode ou não utilizar
using System;


class DIO {

  static void Main(string[] args) {

    double pi, raio, volume;
    pi = 3.14159;
 //TODO: Complete os espaços em branco com uma possível solução para o desafio
    raio = double.Parse(Console.ReadLine());
    
    volume = ( 4.0/3 ) * pi * Math.Pow( raio , 3 );
    
    Console.WriteLine($"VOLUME = {volume.ToString("F3")}");
    }

}
*/