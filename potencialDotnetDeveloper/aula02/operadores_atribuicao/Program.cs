
//Funções criadas
void Atribuicao(){
    int a = 10;
    int b = 90;
    int c = a + b;
    
    Console.WriteLine($"a + b = {c}");
    Console.WriteLine($"c - 50 = {c -= 50}\n");
}


void ConverterTipoVariavel(){
    int a = Convert.ToInt32("65");
    int b = Convert.ToInt32(20);
    int c = Convert.ToInt32(null);
    string d = Convert.ToString(45);

    int e = int.Parse("30");
    decimal f = decimal.Parse("3,1415");

    string g = "opaString";
    int h = 0;
    int.TryParse(g, out h);


    Console.WriteLine($"Convert, string to int = {a + 5}");
    Console.WriteLine($"Convert, int to int = {b}");
    Console.WriteLine($"Convert, null to int = {c}");
    Console.WriteLine($"Convert, int to string = {d}");
    Console.WriteLine($"Parse, string to int = {e}");
    Console.WriteLine($"Parse, string to decimal = {f}");
    Console.WriteLine($"TryParse, If wrong, then another var = {h}");

    
}


//Funções chamadas
Atribuicao();

ConverterTipoVariavel();