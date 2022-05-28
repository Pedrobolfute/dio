/*Objetivo aqui é mostrar os Value Types, os Reference Types e praticar a sintaxe e o debug*/

using System;
using static System.Console;
    // Assim não presiso de ficar usando o Console.WriteLine

namespace demo  
{
    public class Program
    {






    /*Isso (static void ...) é um Método (função), ele está contido em uma classe pública.
      "Ele não presisa ser puplico porque está na mesma classe"*/
        static void Adicionar20(int a)
        {
            //no debug a variável "a" só vai ter o 20, somente, *dentro desse método*
            a = a + 20;
        }


        static void TesteAdicionar20()
        {
            int a = 2;

            /*Na chamada desse método/função aqui, mando adicionar 20 a minha variável "a" com 
              o "intuito de printar 20 + 2 = '22' no final".
              Mas a principal característica de um ValueType é que o valor de uma var é atribuido
              para outra var, ele é somente "copiado" e não é passado o valor da referência na memória.
              Essa cópia só existe dentro do método Adicionar20(int a).
            */
            Adicionar20(a);
            WriteLine($"O valor da variável por valor é {a}");
        }






        //Geito certo que retorna o conteúdo e a referência da variável.
        //Adicionando o int e o return
        static int AdicionarVinte(int a)
        {
            return a + 20;
        }


        static void TesteAdicionarVinte()
        {
            int a = 2;
            a = AdicionarVinte(a);
            WriteLine($"O valor da variável por referência é {a}");
        }






        static void TrocarNome(Pessoa p1, string nomeNovo)
        {
            p1.Nome = nomeNovo;
        }
        public static void Main(string[] args)
        {
           //Teste de chamar o método/função 
           //TesteAdicionarVinte();
           //TesteAdicionar20();
           Pessoa p1 = new Pessoa(); //Iniciado essa classe/instancia
           p1.Nome = "Pedro";   // atribuindo um nome à pessoa
           p1.Idade = 23;     // ...
           p1.Documento = "4321"; // ...
           //TrocarNome(p1, "Pedrobolfute");
           //WriteLine($"O novo nome é : {p1.Nome}");

        }
    }
}

// Rápida revisão
// valuetype vao pra stack
// referencetype heap
//codigo das demos originais .com/ricardovicentini/Demos...
