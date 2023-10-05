
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { Input, useInput, Grid   } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function Visualizar({
    mobile,
    nome,
    email,
    cpf,
    telefone,
    turno,
    setMobile,
}:{
    mobile:boolean;
    nome:string;
    email:string;
    cpf:string;
    telefone:string;
    turno:string;
    setMobile: false;
}){
    const router = useRouter();

    const navegarParaOutraPasta = () => {
      router.push('/pages');
    };
    return (
      <>
        <Flex flexDir="column" p="8" pt="6" >
          <Flex  w="100%" flexDir='row' justify='space-between' align='end'>
            <Text color="#787878" fontSize="1.8rem" flexDir='column'>
              Informações sobre secretário
            </Text>
            <Button label="Editar" onPress={navegarParaOutraPasta}  filled />
          </Flex>
          </Flex>
          <Divider mt="4" />
          <Flex
            flexDir="column"
            py="4"
            w="100%"
            px="7"
          >
            <Text fontSize='1rem' color="#787878">
            Nome
            </Text>
          <Box borderBottom='1px' borderColor='gray.200'>
            <Text fontSize='1.6rem' color="#787878">
            {nome}
            </Text>
          </Box> 
            {mobile ? (
              <Flex
                w="100%"
                flexDir="row"
                justify="space-between"
              >
                <Box gridColumn='initial' borderBottom='1px' borderColor='gray.200'>
                  <Text fontSize='1rem' color="#787878">
                  E-mail
                  </Text>
                    <Text fontSize='1.6rem' color="#787878">
                    {email}
                    </Text>
                  <Text fontSize='1rem' color="#787878">
                  Telefone
                  </Text>
                    <Text fontSize='1.6rem' color="#787878">
                    {telefone}
                    </Text>
                </Box> 
              </Flex>
            ) : (
              <Flex
              w="100%"
              flexDir="row"
              justify="space-between"
            >
              <Box gridColumn='revert' borderBottom='1px' borderColor='gray.200'>
              <Text fontSize='1rem' color="#787878">
              Email
              </Text>
                <Text fontSize='1.6rem' color="#787878">
                {email}
                </Text>
              </Box>
              <Box borderBottom='1px' borderColor='gray.200' gridColumn='revert'>
              <Text fontSize='1rem' color="#787878">
              Telefone
              </Text>
                <Text fontSize='1.6rem' color="#787878">
                {telefone}
                </Text>
              </Box> 
            </Flex>
            )}
              <Box borderBottom='1px' borderColor='gray.200' gridColumn='revert'>
                <Text fontSize='1rem' color="#787878">
                Turno
                </Text>
                <Text fontSize='1.6rem' color="#787878">
                {turno}
                </Text>
              </Box>
              <Box borderBottom='1px' borderColor='gray.200' gridColumn='revert'>
                <Text fontSize='1rem' color="#787878">
                CPF
                </Text>
                <Text fontSize='1.6rem' color="#787878">
                {cpf}
                </Text>
              </Box>
        </Flex>
        <Button
        onPress={navegarParaOutraPasta}
        label="Voltar"
        />
        </>
      );
}

/* Necessito ligar a label de E-mail e Telefone com o border bottom, além de conseguir fazer  o telefone ficar ao centro, enquanto o e-mail está ao inicio

Outra coisa é tentar  pesquisar como criar a página de fato, as rotas e consumo podem ser dúvidas retiradas lá dentro.

Iniciar Visualizar dados do professor tbm, deixando para a próxima o dos pacientes, a página de alunos deverá ser conversado, já que seu design foge desse padrão.

*/