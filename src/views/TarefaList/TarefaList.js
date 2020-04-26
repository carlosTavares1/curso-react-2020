import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefaList = () => {
  const classes = useStyles();
  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas';
  const headers = { 'x-tenant-id': 'carlos@email.com' };

  const salvar = tarefa => {
    axios
      .post(API_URL, tarefa, {
        headers: headers
      })
      .then(response => {
        const novaTarefa = response.data;
        setTarefas([...tarefas, novaTarefa]);
        setMensagem('Registro salvo com sucesso!')
        setOpenDialog(true)
      })
      .catch(erro => {
        setMensagem('Ocorreu um erro ao salvar!', erro);
        setOpenDialog(true);
      });
  };

  const listarTarefas = () => {
    axios
      .get(API_URL, {
        headers: headers
      })
      .then(response => {
        const listaDeTarefas = response.data;
        console.log(listaDeTarefas);
        setTarefas(listaDeTarefas);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  const alterarStatus = id => {
    axios
      .patch(`${API_URL}/${id}`, null, {
        headers: headers
      })
      .then(response => {
        const lista = [...tarefas];
        lista.forEach(tarefa => {
          if (tarefa.id === id) {
            tarefa.done = true;
          }
        });
        setTarefas(lista);
        setMensagem('Registro atualizado com sucesso!')
        setOpenDialog(true)
      })
      .catch(erro => {
        setMensagem('Ocorreu um erro ao atualizar!', erro);
        setOpenDialog(true);
      });
  };

  const deletar = id => {
    axios
      .delete(`${API_URL}/${id}`, {
        headers: headers
      })
      .then(response => {
        const lista = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(lista);
        setMensagem('Registro deletado com sucesso!')
        setOpenDialog(true)
      })
      .catch(erro => {
        setMensagem('Ocorreu um erro ao deletar!', erro);
        setOpenDialog(true);
      });
  };

  useEffect(() => {
    listarTarefas();
  }, []);

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar} />
      <div className={classes.content}>
        <TarefasTable
          alterarStatus={alterarStatus}
          deleteAction={deletar}
          tarefas={tarefas}
        />
      </div>
      <Dialog
        onClose={e => setOpenDialog(false)}
        open={openDialog}
      >
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>{mensagem}</DialogContent>
        <DialogActions>
          <Button onClick={e => setOpenDialog(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TarefaList;
