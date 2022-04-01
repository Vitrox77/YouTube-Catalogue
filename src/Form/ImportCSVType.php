<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ResetType;

class ImportCSVType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('CSV_file', FileType::class, [
            'attr' => [
                'accept' => '.csv',
                'value' => '',
            ],
            // unmapped means that this field is not associated to any entity property
            'mapped' => false,

            // make it optional so you don't have to re-upload the PDF file
            // every time you edit the Product details
            'required' => true,
            
        ])
        ->add('submit', ButtonType::class, [
            'label' => 'Download CSV template',
            'attr' => [
                'class' => 'd-none btn btn-danger my-4'
            ],
        ])
        ->add('reset', ResetType::class, [
                'label' => '',
                'attr' => [
                    'class' => 'd-none btn btn-secondary modal-reset-button'
                ],
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
