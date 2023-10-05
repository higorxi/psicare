
import { useRouter } from 'next/router';
import { Input, Grid } from "@nextui-org/react";

export default function Visualizar({
    mobile,
    nome,
    email,
    cpf,
    telefone,
    turno,
}:{
    mobile:any;
    nome:string;
    email:string;
    cpf:string;
    telefone:string;
    turno:string;
}){
    const router = useRouter();

    const navegarParaOutraPasta = () => {
      router.push('/pages');
    };
    return (
        <Grid.Container gap={4}>
        <Grid>
            <Input animated={false} labelPlaceholder="Default" status="default" />
        </Grid>
        <Grid>
            <Input
            underlined
            animated={false}
            labelPlaceholder="Primary"
            color="primary"
            status='default'
            />
        </Grid>
        <Grid>
            <Input
            bordered
            animated={false}
            labelPlaceholder="Secondary"
            color="secondary"
            />
        </Grid>
        </Grid.Container>
    );

}